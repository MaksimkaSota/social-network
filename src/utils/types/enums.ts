export enum UrlString {
  social_network = 'https://social-network.samuraijs.com/api/1.0/',
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
  messages = '/messages',
  users = '/users',
  news = '/news',
  musics = '/musics',
  settings = '/settings',
  login = '/login',
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
  term = 'term',
  friend = 'friend',
}
