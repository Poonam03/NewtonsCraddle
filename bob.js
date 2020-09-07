class Bob
{

    constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.8,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		//this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y,this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		
			var angle=this.body.angle;
			push()
			translate(pos.x, pos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,0,255)
			ellipseMode(RADIUS);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r,this.r);
			pop()
			
	}
}