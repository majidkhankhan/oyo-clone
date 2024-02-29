import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
export const logoutAlert = (callback) => {
  Swal.fire({
    title: "Do you want to Logout?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
    callback()      
    } else if (result.isDenied) {

    }
  });
}

export const loginAlert =(text)=>{
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: text,
    showConfirmButton: false,
    timer: 1500
  });
}

export const commonAlert=()=>{
  Swal.fire({
    title: "Search City field required",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });
}