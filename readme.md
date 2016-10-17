#A reliable way to locate firefighter floor location

##TL;DR (Abstract)
NYC buildings should be retrofitted with RFID tags in the stairwell to allow firefighters to scan and report their floor location to operations command. Tags are cheap (less than $0.25/tag), and a small scanning device on the firefighter's tank can scan them within a 10ft radius, requiring no effort on the firefighter's part.

This idea and working proof of concept was a winning hack at the MD5 National Security Technology Accelerator 2016 Hackathon in NYC.

##The problem

Vertically locating firefighters is a surprisingly difficult task.

Despite years of research into locating firefighters' positions in a building, Firefighters in NYC currently rely on a whiteboard, a grease pen, and fridge magnets as their primary means of coordinating the operations of multiple teams. Team leaders are tasked with personally radioing in their location to the captain who updates his whiteboard accordingly.

This task becomes exponentially complex when multiple teams are involved, and it places a burden on the firefighters who are often operating in completely obscured, smoke-filled buildings. Firefighter teams are often unaware of their current position or occupied with their duties and are unable to consistently update the captain on the ground. Not surprisingly, the white board system--which has been in use in some form for over 100 year--consistently proves unreliable. In the process, lives get lost.


A 'command board' used by firefighters ![white board](https://github.com/GabrielMahan/EL-Tags/blob/master/command_station.jpg "archaic whiteboard")

Previous efforts to solve this problem, however, have all landed short. Accelerometer and altimeter solutions cannot accurately report floor level, especially in a burning building in which the pressure changes frequently or floor height is inconsistent. While active beacon systems show some promise, they burden teams with the task of leaving location 'breadcrumbs'. No solution has proven to be entirely reliable and unobtrusive to the duties of the firefighter.  

##A novel, simple solution

We suggest a simple two-pronged solution.

First, we recommend that the NYC firecode be amended to require that all buildings over ten stories in NYC be outfitted with passive RFID stickers indicating the floor number in the stairwell and at elevator entrances. Floors need to be visually marked regardless, and the incorporation of an RFID tag indicating the floor number is a trivial additional cost at under $0.25 per tag. The cost to retrofit the **entire** city with such UHF passive tags is in the ballpark of $50,000 to $100,000--an almost negligible cost considering the trillions of dollars of real estate in NYC. Tags have a storage life of at least 10 years, work when accidentally painted over, and require no maintenance or power supply.


Secondly, firefighters should be outfitted with an RFID reader calibrated to scan tags within a 10 foot range. This is achievable using off the shelf components at low cost, and as other wearable firefighter-location systems reach maturity, the incorporation  of such RFID functionality into their devices will continue to provide the most valuable and accurate data. These sensors are easily attached to the firefighter's equipment and scan tags within a 10 foot (adjustable) proximity as the firefighter moves through the building, freeing the firefighter to focus on the mission. Upon scanning a tag, the device relays the floor number via radio to operations command, which is updated instantaneously.

This solution does require retrofitting buildings, but at negligible cost and sticker-book simplicity. Of all the requirements of the city's firecode, placing numbered stickers in a stairwell would be among the simplest--and the cheapest.

##Hackathon proof of concept

In the span of 36 hours our team created a working proof of concept using off the shelf components in a 3D printed enclosure; specifically, a Raspberry Pi, an RFID scanner microchip, and a portable cell phone battery charger.

![Matt modeling the device](https://github.com/GabrielMahan/EL-Tags/blob/master/matt_model.jpg "Matt modeling the device")
![Pitch photo](https://github.com/GabrielMahan/EL-Tags/blob/master/presentation1.jpg "Pitching the idea")


The Raspberry Pi module communicated with a RESTful Rails API, and a web interface provided real-time updates as the user traversed the building.

![Hackathon](https://github.com/GabrielMahan/EL-Tags/blob/master/hackathon.jpg "Hackathon mingling")
