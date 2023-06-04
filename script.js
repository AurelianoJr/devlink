function toogleMode() {
  let element = document.documentElement
  element.classList.toggle("light-theme")

  const profileImage = document.querySelector("[data-profile]")
  profileImage.setAttribute(
    "src",
    element.classList.contains("light-theme")
      ? "./assets/avatar-light.png"
      : "./assets/avatar-dark.png"
  )
}
