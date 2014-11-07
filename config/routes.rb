Rails.application.routes.draw do

  get "/" => "sessions#index"
  post "/sessions" => "sessions#create"
  post "/users" => "users#create"
  get "/agendas" => "agendas#show"
  get "/users" => "users#show"
  get "/agendas/:id/selections" => "agendas#show_selections"
  post "/agendas" => "agendas#create"
  post "/selections" => "selections#create"
  get "/quiztions" => "quiztions#show"
  put "/agendas/:id/selections" => "selections#update"
  post "/quiztions" => "quiztions#create"
  get "/test" => "quiztions#test"
  put "/agendas/:id" => "agendas#update"
  delete "/sessions" => "sessions#destroy"
  post "/attendees" => "attendees#create"
  delete "/users/:id/attendees" => "attendees#destroy"
  get "/suggestions" => "suggestions#index"
  post "/votes" => "votes#create"
  # get "/votes" => "votes#index"
  get "votes" => "votes#show"
  get "/token" => "suggestions#token"
  get "/agendas/:id/votes" => "votes#index"
  get "/agendas/:id/votes/:time" => "votes#index"
  get "agendas/:id/attendees" => "attendees#index"


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
