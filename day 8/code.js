const link = "https://striveschool.herokuapp.com/api/product/";
let encoded = window.btoa('user2:4Lr9nqHZZZDNUy7L')
let get = async () => {
  let response = await fetch(link, {
    headers: new Headers({
      "Authorization":"Basic " + encoded
    }),
});
return await response.json();
}
const getProduct = async (id) => {
  let response = await fetch(link + id, {
    headers: new Headers({
    "Authorization":"Basic " + encoded
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
        "Authorization": "Basic " + encoded
      }),
    });
    return response;
  };
  const editProduct = async (id, product) => {
    let response = await fetch(link + id, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": "Basic " + encoded
      }),
    });
    return response;
  };
  const deleteProduct = async (id) => {
    let response = await fetch(link + id, {
      method: "DELETE",
      headers: new Headers({
        "Authorization":"Basic " + encoded
         })
    });
    return response;
  };