const options = {
    responive : true,
    scales: {
        x: {
            display: false,
            grid: {
                display: false,
            },
        },
        y: {
            max:5000,
            min:0,
            ticks:{
                color: 'white',
                fontSize: 12,
            },       
            grid: {
                display: false,
                color:"#ffffff"
            },

        },
    },
    plugins: {
        legend : {
            display: false,
        },
        title: {
            display: false,
        }
    }
}

export default options;