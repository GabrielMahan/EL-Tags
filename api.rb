  #############
  # Routes 
  #############
  
  root 'application#control'
  get '/floors/:floor_id/firefighters/:firefighter_id', to: 'application#tag'
  
  #############
  # Application Controller
  #############
  
  def tag
    ff = Firefighter.find(params[:firefighter_id])
    ff.floor = Floor.find_by(floor: params[:floor_id].to_i)
    if ff.save
      puts "Firefighter updated"
    end
    
    redirect_to root_path
  end

  def control
    floors = {}
    Floor.all.each do |f|
      floors[f.floor.to_s.to_sym] = f.firefighters.all.map { |ff| ff.name }
    end

    return render json: floors
  end
