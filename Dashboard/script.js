// Js untuk Navbar
const navigation = document.getElementById('nav'); // untuk mendapatkan elemen HTML dengan id="nav" dan tersimpan ke dalam variabel Navigation
const menu = document.getElementById('menu'); // // untuk mendapatkan elemen HTML dengan id="menu" dan tersimpan ke dalam variabel Menu

menu.addEventListener('click', () => {
    // event listener itu untuk mendeteksi klik pada elemen 'menu'. dan ketik di klik maka akan dijalankan

    navigation.style.setProperty('--childenNumber', navigation.children.length);
    // untuk Mengatur sebuah variabel CSS --childenNumber dengan jumlah anak dari elemen navigation. seperti <li> dalam <ul>.

    navigation.classList.toggle('active'); // untuk menambahkan/menghapus kelas 'active' pada elemen 'navigation'
    menu.classList.toggle('active'); // untuk menambahkan/mengapus kelas 'active' pada elemen 'menu' dan 'navigation'
});

// tombol Read More
function scrollToAboutUs() {
    const aboutUsSection = document.getElementById("AboutUs");
    aboutUsSection.scrollIntoView({ behavior: 'smooth' });
}

//fungsi fly
const goToTop = () => {
    return (location.href = '#Home');
};



// Membaca data JSON chartnya
fetch('dataset13.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Anda bisa memproses data di sini untuk ditampilkan dalam chart

        // Contoh pengambilan data penjualan
        const salesData = data.map(order => parseFloat(order.Sales.replace('$', '').replace('.', '').replace(',', '.')));

        // Sales Perbulan
        const ctx1 = document.getElementById('chart-2').getContext('2d');
        const lineChart = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'Mei',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'Mei',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'Mei',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'Mei',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',],
                datasets: [
                    {
                        label: 'Total Sales Per Month',
                        data: [926929, 326370, 1911668, 1762336, 1537392, 1741447, 2027738, 1912360, 3303447, 1936858, 4900162, 3681679, 559404, 814060, 1644174, 2168021, 1831950, 1488433, 2007176, 2228368, 3876360, 2317750, 4720169, 4005348, 1009505, 1175077, 2457987, 1801930, 2380132, 2547478, 2644062, 2052894, 4466174, 2296695, 4437111, 5037568, 1828788, 1609476, 3273477,
                            2284067, 3157171, 3121578, 2998816, 2891349, 5067435, 3326550, 5982827, 5622997],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Sales Pertahun
        const ctx2 = document.getElementById('chart-3').getContext('2d');
        const barChart = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: [2014, 2015, 2016, 2017],
                datasets: [
                    {
                        label: 'Total Sales Per Years',
                        data: [25968386, 27661213, 32306613, 41164531],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Profitabilitas Penjualan
        const ctx3 = document.getElementById('chart-4').getContext('2d');
        const linechart2 = new Chart(ctx3, {
            type: 'line',
            data: {
                labels: [2014, 2015, 2016, 2017],
                datasets: [
                    {
                        label: 'Profitabilitas',
                        data: [0.09, 0.12, 0.1, 0.11],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Total Sales Per-Category
        const ctx4 = document.getElementById('chart-5').getContext('2d');
        const doughnutbar = new Chart(ctx4, {
            type: 'doughnut',
            data: {
                labels: ['Technology', 'Furniture', 'Office Supplies'],
                datasets: [
                    {
                        label: 'Total Sales Per Category',
                        data: [37097641, 45045015, 44958087],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                        borderWidth: 1
                    }
                ]
            }
        });

        // Total Sales Per-Shipmode
        const ctx5 = document.getElementById('chart-6').getContext('2d');
        const piebar = new Chart(ctx5, {
            type: 'pie',
            data: {
                labels: ['First Class', 'Second Class', 'Standard Class', 'Same Day'],
                datasets: [
                    {
                        label: 'Total Sales Per Shipmode',
                        data: [19252666, 25489491, 75883132, 6475454],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                        borderWidth: 1
                    }
                ]
            }
        });

        // Sales Per-SubCategory
        const ctx6 = document.getElementById('chart-7').getContext('2d');
        const barChart2 = new Chart(ctx6, {
            type: 'bar',
            data: {
                labels: ['Phones', 'Chairs', 'Storage', 'Accessories', 'Tables', 'Furnishings', 'Binders', 'Paper', 'Appliances', 'Bookcases', 'Machines', 'Art', 'Copiers', 'Envelopes', 'Supplies', 'Labels', 'Fasteners'],
                datasets: [
                    {
                        label: 'Total Sales Per SubCategory',
                        data: [20350228, 19890127, 15134121, 11839826, 10484065, 8509469, 8290025, 7847924, 6617569, 6161354, 2721648, 2639566, 1708179, 1641436, 1521225, 1247958, 302022],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    y: {
                        beginAtZero: true
                    },
                },
            },
        });

        // Sales Per-Segment
        const ctx7 = document.getElementById('chart-8').getContext('2d');
        const barChart3 = new Chart(ctx7, {
            type: 'doughnut',
            data: {
                labels: ['Corporate', 'Home Office', 'Consumer'],
                datasets: [
                    {
                        label: 'Total Sales Per Years',
                        data: [38846921, 22751065, 65502757],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Sales Per-Segment
        const ctx8 = document.getElementById('chart-9').getContext('2d');
        const barChart4 = new Chart(ctx8, {
            type: 'bar',
            data: {
                labels: ['Dan Reichenbach', 'William Brown', 'Laura Armstrong', 'Cassandra Brandow', 'Maria Etezadi'],
                datasets: [
                    {
                        label: '',
                        data: [652803, 616010, 516833, 507672, 506598],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    })
    .catch(error => console.error('Error fetching the data:', error));


// Memfilter Data 
document.addEventListener("DOMContentLoaded", function() {
    const filterForm = document.getElementById('filterForm');
    const totalSalesElement = document.getElementById('totalSales');
    const totalProfitElement = document.getElementById('totalProfit');
    const totalProductElement = document.getElementById('totalProduct');
    const totalCustomerElement = document.getElementById('totalCustomer');

    // Event listener for each change in the dropdown filters
    filterForm.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', function() {
            fetchData();
        });
    });

    function fetchData() {
        const year = document.getElementById('year').value;
        const category = document.getElementById('category').value;
        const region = document.getElementById('region').value;
        const segment = document.getElementById('segment').value;

        fetch('dataset13.json')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(item => {
                    return (year === '' || item.Year.toString() === year) &&
                           (category === '' || item.Category === category) &&
                           (region === '' || item.Region.toLowerCase().includes(region.toLowerCase())) &&
                           (segment === '' || item.Segment.toLowerCase().includes(segment.toLowerCase()));
                });

                updateTotalSales(filteredData);
                updateTotalProfit(filteredData);
                updateTotalProduct(filteredData);
                updateTotalCustomer(filteredData);
                // renderChart1(filteredData); // Implement this if needed
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function updateTotalSales(data) {
        const totalSales = data.reduce((acc, item) => acc + item.Sales, 0);
        totalSalesElement.textContent = totalSales.toLocaleString('en-US', {minimumFractionDigits: 2});
    }

    function updateTotalProfit(data) {
        const totalProfit = data.reduce((acc, item) => acc + item.Profit, 0);
        totalProfitElement.textContent = totalProfit.toLocaleString('en-US', {minimumFractionDigits: 2});
    }

    function updateTotalProduct(data) {
        const totalProduct = data.length; // Assuming each item represents a product
        totalProductElement.textContent = totalProduct;
    }

    function updateTotalCustomer(data) {
        const uniqueCustomers = new Set(data.map(item => item.CustomerID));
        totalCustomerElement.textContent = uniqueCustomers.size;
    }
});


