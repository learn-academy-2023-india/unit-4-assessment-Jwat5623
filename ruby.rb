# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
    attr_accessor :model, :wheels, :current_speed
  
    # initialize Bike Class with model object
    # creating getter and setter
    def initialize(model)
      @model = model
      @wheels = 2
      @current_speed = 0
    end
  
    # method to change the number of wheels
    def wheels=(new_wheels)
      @wheels = new_wheels
    end
  
    # method to increase speed
    def pedal_faster(amount)
      @current_speed += amount
    end
  
    # method to decrease speed
    # brake method so that speed can't go negative
    def brake(amount)
      @current_speed = [@current_speed - amount, 0].max
    end
  
    # method to bike info that includes all previous methods
    def bike_info
      "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end