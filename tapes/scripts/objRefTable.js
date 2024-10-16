const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Car,
		C3.Behaviors.LOS,
		C3.Plugins.TiledBg,
		C3.Plugins.Shape3D,
		C3.Behaviors.solid,
		C3.Plugins.Camera3D,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.HTMLElement,
		C3.Plugins.Audio,
		C3.Plugins.iframe,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.LOS.Acts.AddObstacle,
		C3.ScriptsInEvents.EventSheet1_Event2,
		C3.ScriptsInEvents.EventSheet1_Event3,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Camera3D.Acts.LookParallelToLayout,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Exps.viewportleft,
		C3.Plugins.System.Exps.viewportright,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.HTMLElement.Acts.SetPos,
		C3.Plugins.System.Exps.viewporttop,
		C3.Plugins.HTMLElement.Acts.SetWidth,
		C3.Plugins.System.Exps.viewportwidth,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Car.Acts.SimulateControl,
		C3.Plugins.Touch.Cnds.CompareTouchSpeed,
		C3.Plugins.System.Cnds.CompareBetween,
		C3.Plugins.Touch.Exps.AngleAt,
		C3.Plugins.Sprite.Acts.RotateClockwise,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Keyboard.Cnds.OnAnyKey,
		C3.Plugins.Mouse.Cnds.OnAnyClick,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Behaviors.LOS.Cnds.HasLOSToObject,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Shape3D.Acts.RotateClockwise,
		C3.Plugins.HTMLElement.Acts.SetVisible,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Cnds.Every,
		C3.ScriptsInEvents.EventSheet1_Event19,
		C3.Plugins.Keyboard.Cnds.IsKeyDown
	];
};
self.C3_JsPropNameTable = [
	{Car: 0},
	{LineOfSight: 0},
	{Player: 0},
	{TiledBackground: 0},
	{Solid: 0},
	{"3DShape": 0},
	{"3DCamera": 0},
	{Keyboard: 0},
	{Mouse: 0},
	{"3DShape2": 0},
	{TapeProductObject: 0},
	{TapeCollision_1: 0},
	{ButtonUp: 0},
	{ButtonDown: 0},
	{Touch: 0},
	{DistanceChecker: 0},
	{ProductData: 0},
	{CheckoutScript: 0},
	{styles: 0},
	{Audio: 0},
	{iframe: 0},
	{Cart: 0},
	{Sprite: 0},
	{"3DShape3": 0},
	{"3DShape4": 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Ceiling: 0},
	{TapeProductObject2: 0},
	{TapeFrontImage2: 0},
	{TapeSideImage2: 0},
	{TapeBackImage2: 0},
	{ButtonRight: 0},
	{ButtonLeft: 0},
	{DEVICE: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	_3DShape: class extends self.I3DShapeInstance {},
	_3DCamera: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	_3DShape2: class extends self.I3DShapeInstance {},
	TapeProductObject: class extends self.I3DShapeInstance {},
	TapeCollision_1: class extends self.I3DShapeInstance {},
	ButtonUp: class extends self.ISpriteInstance {},
	ButtonDown: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	DistanceChecker: class extends self.ISpriteInstance {},
	ProductData: class extends self.IHTMLElementInstance {},
	CheckoutScript: class extends self.IHTMLElementInstance {},
	styles: class extends self.IHTMLElementInstance {},
	Audio: class extends self.IInstance {},
	iframe: class extends self.IIframeInstance {},
	Cart: class extends self.IHTMLElementInstance {},
	Sprite: class extends self.ISpriteInstance {},
	_3DShape3: class extends self.I3DShapeInstance {},
	_3DShape4: class extends self.I3DShapeInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Ceiling: class extends self.I3DShapeInstance {},
	TapeProductObject2: class extends self.I3DShapeInstance {},
	TapeFrontImage2: class extends self.ISpriteInstance {},
	TapeSideImage2: class extends self.ISpriteInstance {},
	TapeBackImage2: class extends self.ISpriteInstance {},
	ButtonRight: class extends self.ISpriteInstance {},
	ButtonLeft: class extends self.ISpriteInstance {}
}