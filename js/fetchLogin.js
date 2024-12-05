  const getEmail = document.getElementById("email");
  const getPassword = document.getElementById("password");

  document.querySelector("#login-form").addEventListener("login-button", (e) => {
    e.preventDefault();

    const datajson = {
      Email: getEmail.value,
      Password: getPassword.value,
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(datajson);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    console.log(raw);

    fetch("https://asia-southeast2-awangga.cloudfunctions.net/idbiz/auth/login/form", requestOptions)
      .then(async (response) => {
        const status = response.status;
        const result = await response.json();

        if (status === 200) {
          Swal.fire({
            title: "Login Berhasil",
            text: "Anda berhasil Login.",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/cust";
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Gagal Login",
            text: "Email atau Password tidak cocok",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  });