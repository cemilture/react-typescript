type TStatus = {
  status: "loading" | "success" | "error";
};

function Request(props: TStatus) {
  let message = "";
  if (props.status === "loading") {
    message = "Yükleniyor...";
  } else if (props.status === "success") {
    message = "Tamamlandı.";
  } else if (props.status === "error") {
    message = "Hata";
  } else {
    throw Error((message = "Lütfen uygun bir veri giriniz"));
  }
  return <div>{message}</div>;
}

export default Request;
