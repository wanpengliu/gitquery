(function(){
    angular
        .module('gqChart')
        .controller('BubbleController', BubbleController);

    function BubbleController($interval) {
        var vm = this;

        vm.options = {
            tooltips: { enabled: false },
            scales: {
                xAxes: [{
                    display: false,
                    ticks: {
                        max: 125,
                        min: -125,
                        stepSize: 10
                    }
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        max: 125,
                        min: -125,
                        stepSize: 10
                    }
                }]
            }
        };

        createChart();
        $interval(createChart, 2000);

        function createChart() {
            vm.series = [];
            vm.data = [];
            for (var i = 0; i < 50; i++) {
                vm.series.push(`Series ${i}`);
                vm.data.push([{
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: randomRadius()
                }]);
            }
        }

        function randomScalingFactor() {
            return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
        }

        function randomRadius() {
            return Math.abs(randomScalingFactor()) / 4;
        }
    }
})();