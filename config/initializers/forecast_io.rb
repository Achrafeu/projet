ForecastIO.configure do |configuration|
    configuration.api_key = Rails.application.secrets.keyfor
end