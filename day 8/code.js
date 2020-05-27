const link = "https://striveschool.herokuapp.com/api/product/";
let encoded = window.btoa('user2:4Lr9nqHZZZDNUy7L')
let getEvents = async () => {
  let response = await fetch(link, {
    headers: new Headers({
      "Authorization":"Basic " + encoded
    }),
});
return await response.json();
}
const saveEvent = async (agendaEvent) => {
    let response = await fetch(link, {
      method: "POST",
      body: JSON.stringify(agendaEvent),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": "Basic " + encoded
      }),
    });
    return response;
  };
  