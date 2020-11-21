<template>
    <v-row>
        <v-col md="12">
            <v-btn
                elevation="0"
                class="grey lighten-5"
            >
                <v-icon class="subtitle-1 mr-1">mdi-poll</v-icon>
                <small class="caption">Graficos</small>
            </v-btn>
        </v-col>
        <v-col 
            md="6"
            xs="12"
            sm="12"
        >
            <v-card>
                <v-card-title class="font-weight-light">
                    Grafico lineal
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <ve-line :data="chartData"
                        md="6"
                    ></ve-line>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col 
            md="6"
            xs="12"
            sm="12"
        >
            <v-card>
                <v-card-title class="font-weight-light">
                    Grafico Torta
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <ve-pie :data="chartData"
                        md="6"
                    ></ve-pie>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col 
            md="6"
            xs="12"
            sm="12"
        >
            <v-card>
                <v-card-title class="font-weight-light">
                    Grafico Barra horizontal
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <ve-bar :data="chartData"
                        md="6"
                    ></ve-bar>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col 
            md="6"
            xs="12"
            sm="12"
        >
            <v-card>
                <v-card-title class="font-weight-light">
                    Grafico Barra vertical
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <ve-histogram :data="chartData"
                        md="6"
                    ></ve-histogram>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import VeLine from 'v-charts/lib/line.common'
    import VePie from 'v-charts/lib/pie.common'
    import VeBar from 'v-charts/lib/bar.common'
    import VeHistogram from 'v-charts/lib/histogram.common'

    export default {
        components:{ VeLine, VePie, VeBar, VeHistogram  },
        data(){
            return{
                chartData: {
                    columns: ['date', 'PV'],
                    rows: [
                    { 'date': '01-01', 'PV': 1231 },
                    { 'date': '01-02', 'PV': 1223 },
                    { 'date': '01-03', 'PV': 2123 },
                    { 'date': '01-04', 'PV': 4123 },
                    { 'date': '01-05', 'PV': 3123 },
                    { 'date': '01-06', 'PV': 7123 }
                    ]
                }
            }
        }
    }
</script>