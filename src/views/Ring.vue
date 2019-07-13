<template>
  <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        radius: [0, 100],
        offsetY: 200
      }
      return {
        chartData: {
          columns: ['date', 'cost', '比率'],
          rows: [
            { 'date': '01/01', 'cost': 123, '比率': 0.1 },
            { 'date': '01/02', 'cost': 1223, '比率': 0.2 },
            { 'date': '01/03', 'cost': 2123, '比率': 0.3 },
            { 'date': '01/04', 'cost': 4123, '比率': 0.4 },
            { 'date': '01/05', 'cost': 3123, '比率': 0.5 },
            { 'date': '01/06', 'cost': 7123, '比率': 0.6 }
          ]
        }
      }
    }
  }
</script>