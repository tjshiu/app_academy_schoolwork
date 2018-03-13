Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users

  get 'users/:id', to: 'users#show', as: 'user' do
    resources :artworks, only: [:index]
  end
  get 'users/', to: 'users#index', as: 'users'
  post 'users/', to: 'users#create'
  get 'users/new', to: 'users#new', as: 'new_user'
  get 'users/:id/edit', to: 'users#edit', as: 'edit_user'
  put 'users/:id', to: 'users#update'
  patch 'users/:id', to: 'users#update'
  delete 'users/:id', to: 'users#destroy'

  resources :artworks, only: [:index, :show, :update, :create, :destroy]


  resources :artworkshares, only: [:create, :destroy]
end
