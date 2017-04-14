class City < ActiveRecord::Base
  before_validation :geocode

  def getTemperature
      forecast = ForecastIO.forecast(self.latitude, self.longtitude)
      temperatureOk = false
      if forecast
        todayForecast = forecast.currently
        if todayForecast
          if todayForecast.temperature
            return todayForecast.temperature
           temperatureOk = true
          end
        end
      end
      if !temperatureOk
        return "Unavailable"
      end
       
   end
  
  def getWeather
      forecast = ForecastIO.forecast(self.latitude, self.longtitude)
      weatherOk = false
      if forecast
        todayForecast = forecast.currently
        if todayForecast
          if todayForecast.summary
            return todayForecast.summary
            weatherOk = true
          end
        end
      end
      if !weatherOk
       return "Unavailable"
      end
   end
  
    private
    def geocode
      places = Nominatim.search(self.name).limit(1)
      place = places.first
      if place
      self.longtitude = place.longitude
      self.latitude = place.latitude
    end
  end   
end
