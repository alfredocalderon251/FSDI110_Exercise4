//Catalog File

function getCatalog(){
    // Create AJAX request to getCatalog

    $.ajax({
        url:"/Catalog/GetCatalog",
        type:"GET",
        success:function(res){
            console.log("success",res);

            for(var i=0;i<res.length;i++){
                var item=res[i];

                var html=`
                <div class="col-md-auto">
                <div class="card" style="width: 18rem;">
                <img src="${item.imageURL}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.year} ${item.make} ${item.model}</h5>
                  <p class="card-text">${item.description}</p>
                  <p class="card-text">
                  <ul>
                    <li>cyls: ${item.cyls}</li>
                      <li>hp: ${item.hp}</li>
                        <li>milage: ${item.milage}</li>
                        <li>PassengerCapacity: ${item.passengerCapacity}</li>
                  </ul>
                   </p>
                  <a href="#" class="btn btn-primary">Rent this Car for $${item.dailyPrice}</a>
                </div>
              </div>
              </div>`;

                $('#catalog_div').append(html);
            }
            
        },
        error:function(error){
            console.log("Error",error);
        }

    });

}

function init(){
    console.log("catalog page")
    getCatalog();
}

window.onload=init;