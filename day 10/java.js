const link = "https://striveschool.herokuapp.com/api/movies/";
const myDetails = window.btoa('user2:4Lr9nqHZZZDNUy7L')

let get = async () => {
    let response = await fetch(link , {
     
    headers: new Headers({
     
      "Authorization":"Basic " + myDetails
    })
  });
  return await response.json();

}

const getProduct = async (select) => {
  let response = await fetch(link + select, {
    headers: new Headers({
      "Content-Type": "application/json",
    "Authorization":"Basic " + myDetails
  }),
})
  return await response.json();
};
const save = async (product) => {
    let response = await fetch(link, {
      method: "POST",
      body: JSON.stringify(product),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": "Basic " + myDetails
      }),
    });
    return response;
  };
  // const editProduct = async (id, product) => {
  //   let response = await fetch(link + id, {
  //     method: "PUT",
  //     body: JSON.stringify(product),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       "Authorization": "Basic " + myDetails
  //     }),
  //   });
  //   return response;
  // };
  // const deleteProduct = async (id) => {
  //   let response = await fetch(link + id, {
  //     method: "DELETE",
  //     headers: new Headers({
  //       "Authorization":"Basic " + myDetails
  //        })
  //   });
  //   return response;
  // };



