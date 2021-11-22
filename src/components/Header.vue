<template>
    <div class="flex w-100">
        <div>Header</div>
        <div>
            <div v-if="authenticated">{{userName}}</div>
            <button v-if="!authenticated" @click="login()">Login</button>
        </div>
    </div>
</template>

<script>
import AuthService from '../api/auth';

export default {
    name: 'Header',
    methods: {
       login() {
            AuthService.logout();
            this.$router.push('/login');
        },
    },
    computed: {
        authenticated: () => {
            
            return AuthService.authenticated();
        },
        userName: () => {
            console.log(AuthService.getUserName());
            return AuthService.getUserName();
        }
    }
};
</script>
<style scoped>
.flex {
    display: flex;
    justify-content: space-between;
}

.w-100 {
    width: 400px;
}
</style>