require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module TaxiApp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    config.action_controller.default_protect_from_forgery = true

    Rails.application.config.session_store :cookie_store, key: '_your_app_session'


    # config/application.rb or config/initializers/cors.rb
    # config/application.rb or config/initializers/cors.rb
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'http://localhost:4000' # Replace with the origin(s) of your frontend application
        resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head]
      end
    end



    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
