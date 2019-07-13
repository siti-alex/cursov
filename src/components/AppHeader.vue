<template>
	<div>
		<v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
			<v-list>
				<v-list-tile v-for="(item,i) in menuItems" :key="'navdrawer${i}'" :to="item.route">
					<v-list-tile-action>
						<v-icon v-html="item.icon"></v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title v-text="item.title"></v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar app dark class="primary">
			<v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"> </v-toolbar-side-icon>
			<img src="@/pictures/logo.png" width="5%" align="left" tag="span" style="cursor: pointer">
			<router-link to="/" tag="span" style="cursor: pointer">

			<v-toolbar-title v-text="'БГПУ'"></v-toolbar-title>
			</router-link>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn v-for="(item, i) in menuItems" flat :key="'menuitems${i}'" :to="item.route"><v-icon left v-html="item.icon"></v-icon>{{item.title}}</v-btn>
			<v-btn flat v-if="this.$store.getters.isUserAutheticated" @click.prevent="reload">
				<v-icon left>exit_to_app</v-icon>
				Выйти
			</v-btn>
			</v-toolbar-items>
		</v-toolbar>

	</div>
</template>

<script>
	export default {
		data(){
				return {
					drawer: false
				}
			},
		computed: {
				isUserAutheticated(){
				return this.$store.getters.isUserAutheticated
			},
			menuItems(){
				return this.isUserAutheticated
					? [
					{
						icon: 'cached',
						title: 'Обновить',
					},
					{
						icon: 'settings',
						title: 'Настройки',
					},
				] :
				[
				{
						icon: 'fingerprint',
						title: 'Вход',
						route: '/login',
					}
				]
			}
		},
		methods: {
			reload(){
				 location.reload(true)
			}
		}
	}

</script>
