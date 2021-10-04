<template>
  <div id="home">
    <h1>Vue Quickstart</h1>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <button class="btn btn-primary"
            v-if="!isLogined"
            data-bs-toggle="modal" data-bs-target="#modalForm">
            Đăng nhập
          </button>
          <button class="btn btn-danger" v-else @click="logout">
            Đăng xuất
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Gender</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in users"
                :key="index">
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.name }}</td>
                <td >{{ user.email }}</td>
                <td >{{ user.phone }}</td>
                <td >{{ user.gender }}</td>
                <td>
                  <button class="btn btn-danger" @click="remove(user.id)">X</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="modal fade" id="modalForm"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Bootstrap 5 Modal Form</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitLogin">
              <div class="row" v-if="showLoginModal">
                <div class="col-12">
                  <div class="mb-3 form-group">
                    <label class="form-label">Email Address</label>
                    <input type="text"
                      class="form-control"
                      id="username"
                      name="username"
                      v-model="user.username"
                      placeholder="Username" />
                  </div>
                  <div class="mb-3 form-group">
                    <label class="form-label">Password</label>
                    <input type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      v-model="user.password"
                      placeholder="Password" />
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" v-model="isChecked" id="rememberMe" />
                    <label class="form-check-label" for="rememberMe">Remember me</label>
                  </div>
                </div>
              </div>
              <div class="row" v-else>
                <div class="col-12">
                  <div class="mb-3 form-group">
                    <label class="form-label">Email Address</label>
                    <input type="text"
                      class="form-control"
                      id="username"
                      name="username"
                      v-model="register.email"
                      placeholder="Email"
                      required />
                  </div>
                  <div class="mb-3 form-group">
                    <label class="form-label">Password</label>
                    <input type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      v-model="register.password"
                      placeholder="Password"
                      required />
                  </div>
                  <div class="mb-3 form-group">
                    <label class="form-label">Phone</label>
                    <input type="text"
                      class="form-control"
                      id="password"
                      name="password"
                      v-model="register.phone"
                      required
                      placeholder="Phonenumber" />
                  </div>
                  <div class="mb-3 form-group">
                    <label class="form-label">Name</label>
                    <input type="text"
                      class="form-control"
                      id="password"
                      name="password"
                      v-model="register.name"
                      required
                      placeholder="Username" />
                  </div>
                  <div class="mb-3 form-group">
                    <label class="form-label">Gender</label>
                    <select
                      class="form-control"
                      v-model="register.gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="modal-footer d-block">
                <p class="float-start" v-if="showLoginModal" @click="showLoginModal = false">
                  Not yet account <a href="#">Sign Up</a>
                </p>
                <button type="submit"
                  class="btn btn-warning float-end">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FormInput from '@/components/CommonForm'
  import UpdateForm from '@/components/UpdateForm'
  import Test from '@/components/Test'
  import { mapState } from 'vuex'

  export default {
    name: 'Homepage',
    data() {
      return {
        apps: [
          { name: 'app1', 'desc': 'App1 description <b>App HTML</b>', status: 0 },
          { name: 'app2', 'desc': 'App2 description <b>App HTML</b>', status: 0 },
          { name: 'app3', 'desc': 'App3 description <b>App HTML</b>', status: 0 },
        ],
        isShow: true,
        showLoginModal: true,
        user: {
          username: '',
          password: ''
        },
        isChecked: false,
        register: {
          email: '',
          id: '',
          name: '',
          phone: '',
          password: '',
          gender: 'male'
        }
      }
    },
    computed: {
      ...mapState({
        app: state => state.app.app,
        isLogined: state => state.auth.isLogined,
        isRemember: state => state.auth.isRemember,
        rememberInfo: state => state.auth.rememberInfo,
        users: state => state.mockUsers.users
      })
    },
    components: {
      FormInput,
      UpdateForm,
      Test
    },
    mounted() {
      this.initialize()
    },
    methods: {
      initialize() {
        if (this.isRemember) {
          this.user = {
            ...this.user,
            username: this.rememberInfo.username,
            password: this.rememberInfo.password
          }
        }
        this.isChecked = this.isRemember
      },
      remove(userId) {
        this.$store.dispatch('mockUsers/removeUser', userId);
      },
      showLogin() {
        this.showLoginModal = true
      },
      hiddenLogin() {
        this.showLoginModal = false
      },
      logout() {
        this.$store.dispatch('auth/init');
      },
      registerUser() {
        this.register = {
          ...this.register,
          id: this.randomStr()
        }
        this.$store.dispatch('mockUsers/addUser', this.register);
        this.showLoginModal = true;
      },
      submitLogin() {
        if (!this.showLoginModal) {
          this.registerUser();
          return
        }
        const user = this.users
          .find(u => u.email === this.user.username && u.password === this.user.password)
        if (user) {
          let rememberInfo = {}
          if (this.isChecked) {
            rememberInfo = this.user;
          }
          this.$store.dispatch('auth/updateIsRemember', this.isChecked);
          this.$store.dispatch('auth/updateRememberInfo', rememberInfo);
          this.$store.dispatch('auth/updateUser', user);
          window.location.reload();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-success {
    text-decoration: line-through;
  }
</style>

<style lang="scss">
  .title {
    color: red;
  }
  form {
    .form-group,
    .form-check {
      text-align: left;
    }
  }
</style>







