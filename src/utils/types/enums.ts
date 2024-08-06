export enum RequestString {
  samurai_js = 'https://social-network.samuraijs.com/',
  samurai_js_http = 'https://social-network.samuraijs.com/api/1.0/',
  samurai_js_web_socket = 'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx',
}
export enum UrlSubString {
  me = 'auth/me/',
  login_logout = 'auth/login/',
  captcha = 'security/get-captcha-url/',
  profile = 'profile/',
  status = 'profile/status/',
  photo = 'profile/photo/',
  users = 'users',
  follow = 'follow/',
}
export enum HeaderValue {
  multipart_form_data = 'multipart/form-data',
}
export enum StatusCode {
  success = 0,
  failure = 1,
  required_captcha = 10,
}
export enum RequestState {
  request = 'REQUEST',
  failure = 'FAILURE',
}
export enum RoutePath {
  not_found = '*',
  main = '/',
  profile = '/profile',
  publications = '/publications',
  users = '/users',
  login = '/login',
  chat = '/chat',
}
export enum FormName {
  text = 'text',
  full_name = 'fullName',
  job = 'Job',
  looking_for_a_job = 'lookingForAJob',
  looking_for_a_job_description = 'lookingForAJobDescription',
  about_me = 'aboutMe',
  email = 'email',
  password = 'password',
  remember_me = 'rememberMe',
  captcha = 'captcha',
  is_captcha = 'isCaptcha',
  term = 'term',
  friend = 'friend',
  language = 'language',
  theme = 'theme',
}
export enum KeyboardEventCode {
  escape = 'Escape',
  enter = 'Enter',
}
export enum Language {
  en = 'en',
  ru = 'ru',
}
export enum Theme {
  light = 'light',
  dark = 'dark',
}
export enum TextKey {
  promise = 'promise',
  logout = 'logout',
  login = 'login',
  loadPhoto = 'loadPhoto',
  updatePhoto = 'updatePhoto',
  incorrectPhoto = 'incorrectPhotoText',
  status = 'status',
  incorrectStatus = 'incorrectStatusText',
  data = 'data',
}
