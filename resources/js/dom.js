$(function () {


            // 清空原有内容
            $('#jjjjjjjjjjjjjjj').empty();
            for (let i = 0; i < bigg.length; i++) {
                var bigKuang = `
                                <ul class="mylist row" id="lllllllllll`+ i + `">
                                <li class="title"  ><svg class="icon" aria-hidden="true">
                                        <use xlink:href="#`+ bigg[i].icon + `"></use>
                                    </svg>`+ bigg[i].name + `</li>
                                
                                </ul>
                            `;
                $('#jjjjjjjjjjjjjjj').append(bigKuang);
               
                for (let j = 0; j < bigg[i].bigFly.length; j++) {

                    var ssmKuang = `<li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="` + bigg[i].bigFly[j].url + `"
                                        target="_blank"><svg class="icon" aria-hidden="true">
                                            <use xlink:href="#`+ bigg[i].bigFly[j].icon + `"></use>
                                        </svg><span>`+ bigg[i].bigFly[j].name + `</span></a></li>`;


                   
                    $('#lllllllllll' + i).append(ssmKuang);



                }



            };
        });
