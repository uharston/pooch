Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :breeds, only: %i[index]
  post '/user' => 'users#update'
  post '/login' => 'sessions#omniauth'
  post '/pets' => 'api_calls#petfinder'

end