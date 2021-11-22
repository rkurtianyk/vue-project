<template>
    <div>
        <div>Header</div>
        <div><button @click="logout()">Logout</button></div>
    </div>
</template>

<script>
import AuthService from '../api/auth';

export default {
    name: 'Header',
    methods: {
       logout() {
            AuthService.logout();
            this.$router.push('/login');
        },
    },
};
</script>
