

# RCR




write a function to geolocate (update user location) every certain number of seconds

try check to see if current lat long = destination lat long

when current = destination show an alert

I think leaflet can be run over mapbox???? and mapbox does have documentation for click events...




Day 1 friday - decided to make racr app

Day 2 saturday started building backend,  decided on PEAN stack

Day 3 Sunday --  finished backend and hooked up angularjs started working with google maps api

Day 4 Monday -- discovered that Google forbids maps users from using their apis for realtime directions

Day 5 Tuesday -- f&$%... i finally got functionality working after 12hrs

Day 6 - wedsneday -- S&*^T f&$% S&*^T,  for some stupid reason google maps won't work unless their script tag is in the bottom of my index.html, with my api key in it... AND none of my scripts work unless they are on THE SAME PAGE as the google maps link. 

-App checks current location against location of dropped pins, if you get within ~5m? (accuracy of gps over wifi is questionable...) of a pin you clear it with a amarker.  When you clear ALL pins you win! and the app stops.

www.mapbox.com


Latitude and Longitude precision

The units digit (one decimal degree) gives a position up to 111 kilometers (60 nautical miles, about 69 miles). It can tell us roughly what large state or country we are in.

The first decimal place is worth up to 11.1 km: it can distinguish the position of one large city from a neighboring large city.

The second decimal place is worth up to 1.1 km: it can separate one village from the next.

The third decimal place is worth up to 110 m: it can identify a large agricultural field or institutional campus.

The fourth decimal place is worth up to 11 m: it can identify a parcel of land. It is comparable to the typical accuracy of an uncorrected GPS unit with no interference.

The fifth decimal place is worth up to 1.1 m: it distinguish trees from each other. Accuracy to this level with commercial GPS units can only be achieved with differential correction.