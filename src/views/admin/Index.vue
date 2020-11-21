<template>
    <div>
        <Navbar />
        <v-main 
            class="grey lighten-5 ma-0 pa-0"
        >
            <Email v-if="$store.state.view == 3" />
            <v-container
                class="pa-5 pr-15 pl-15"
            >
                <Information v-if="$store.state.view == 0" />
                <Chart v-if="$store.state.view == 1" />
                <Form v-if="$store.state.view == 2" />
                
            </v-container>
            
        </v-main>
        
    </div>

    
</template>

<script>

    import Information from '@/views/admin/components/Information'
    import Chart from '@/views/admin/components/Chart'
    import Form from '@/views/admin/components/Form'
    import Email from '@/views/admin/components/Email'
    import Navbar from '@/views/admin/components/Navbar'

    export default {
        components:{ Information, Navbar, Chart, Form, Email },
    }
</script>

