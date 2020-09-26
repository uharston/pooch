Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
   resources :breeds, only: %i[index show update]
  get '/auth/:provider/callback' => 'sessions#omniauth'
  #  resource :users, only: [:create]
   post "/login", to: "auth#login" # <= Probably the most useful route 
  #  get "/auto_login", to: "auth#auto_login"
  #  get "/user_is_authed", to: "auth#user_is_authed"
end