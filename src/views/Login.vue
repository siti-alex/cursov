<template>
	 <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Вход</v-toolbar-title>
            
              </v-toolbar>
              <v-card-text>
              	 <v-alert
     				 :value="error"
    				  type="error">
     				 Пользователь не найден
   				 </v-alert>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Логин" type="text" required v-model="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" required v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="login" :disabled="processing">Войти</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
	export default {
		data(){
			return {
				email: null,
				password: null
			}
		},
		computed: {
			error(){
				return this.$store.getters.getError
			},
			processing(){
				return this.$store.getters.getProcessing
			},
			isUserAutheticated(){
				return this.$store.getters.isUserAutheticated
			}
		},
		watch: {
			isUserAutheticated(val){
				if(val === true) 
					this.$router.push("/")
			}
		},
		methods:{
			login(){
				this.$store.dispatch('login', {email:this.email, password: this.password})
			}
		}
		
}
</script>