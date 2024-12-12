function fetchRegister() {
  const getName = document.getElementById("username");
  const getEmail = document.getElementById("email-regis");
  const getPhoneNumber = document.getElementById("phonenumber");
  const getPassword = document.getElementById("password-regis");

  document.querySelector("#register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Prevented form default submission");

    const datajson = {
      Name: getName.value,
      Email: getEmail.value,
      PhoneNumber: getPhoneNumber.value,
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

    console.log("Data Pendaftaran:", raw);

    fetch("https://asia-southeast2-awangga.cloudfunctions.net/idbiz/auth/register", requestOptions)
      .then(async (response) => {
        const status = response.status;
        const result = await response.json();

        if (status === 200) {
          Swal.fire({
            title: "Pendaftaran Berhasil",
            text: "Anda berhasil mendaftar. Silakan login untuk melanjutkan.",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "Lihat Data",
            cancelButtonText: "Tutup",
          }).then((result) => {
            if (result.isConfirmed) {
              console.log("Data Pendaftaran Berhasil:", datajson); // Log data register
              Swal.fire({
                title: "Detail Data Pendaftaran",
                html: ` 
                  <p><strong>Nama:</strong> ${datajson.Name}</p>
                  <p><strong>Email:</strong> ${datajson.Email}</p>
                  <p><strong>No. HP:</strong> ${datajson.PhoneNumber}</p>
                `,
                icon: "info",
              });
            } else {
              window.location.href = "/LoginPage";
            }
          });
        } else {
          Swal.fire({
            icon: "info",
            title: "Gagal Mendaftar",
            text: "Nomor harus diawali dengan 62",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  });
}

window.fetchRegister = fetchRegister;
