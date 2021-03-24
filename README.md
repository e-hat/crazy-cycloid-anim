# Cycloid Animation

Here's a link to the animation: https://editor.p5js.org/deadbird/full/-1TmeUp-Q

This animation runs on p5js. I was messing around with cycloid graphs in math class and came up for an idea for an animation. 

Each frame, the "epicycloid" of two circles is drawn. This graph draws the path of a point on the outer circle as it rolls around the outside of the inner circle. 

I draw this graph by sampling points on it and drawing lines between each adjacent pair of points. Each frame, I increment the radius of the outer circle, as the ratio of the two radii is very important for the shape of the graph. 

What makes this special is that varying the level of detail (aka number of points sampled on the graph) creates completely different, satisfying variations on the same animation. Each of them follow wildly different paths but they all have a special symmetry about them. The slider in the top left controls this level-of-detail.
