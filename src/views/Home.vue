<template>
  <div id="home">
    <h1>Vue Quickstart</h1>
    <div class="title" v-if="isShow">Title</div>
    <div class="title" v-show="isShow">Title</div>
    <div class="form">
      <div class="container">
        <FormInput />
        <UpdateForms />
        <test />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(app, index) in apps"
              :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td :class="{'app-success': app.status}">{{ app.name }}</td>
              <td >{{ app.desc }}</td>
              <td><button v-if="!app.status" class="btn btn-danger" @click="remove(index)">X</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import FormInput from '@/components/CommonForm'
  import UpdateForm from '@/components/UpdateForm'
  import Test from '@/components/Test'

  export default {
    name: 'Homepage',
    data() {
      return {
        apps: [
          { name: 'app1', 'desc': 'App1 description <b>App HTML</b>', status: 0 },
          { name: 'app2', 'desc': 'App2 description <b>App HTML</b>', status: 0 },
          { name: 'app3', 'desc': 'App3 description <b>App HTML</b>', status: 0 },
        ],
        isShow: true
      }
    },
    components: {
      FormInput,
      UpdateForm,
      Test
    },
    methods: {
      remove(index) {
        // this.apps[index].status = 1
        // logiz
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
</style>







