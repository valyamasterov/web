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
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Mouse.Cnds.IsOverObject,
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
		C3.Plugins.Shape3D.Acts.RotateClockwise
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
	{TapeCollision_2: 0},
	{TapeCollision_3: 0},
	{TapeCollision_4: 0},
	{TapeCollision_5: 0},
	{TapeCollision_6: 0},
	{TapeCollision_7: 0},
	{ButtonUp: 0},
	{ButtonDown: 0},
	{Touch: 0},
	{DistanceChecker: 0},
	{HTMLElement: 0},
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
	TapeCollision_2: class extends self.I3DShapeInstance {},
	TapeCollision_3: class extends self.I3DShapeInstance {},
	TapeCollision_4: class extends self.I3DShapeInstance {},
	TapeCollision_5: class extends self.I3DShapeInstance {},
	TapeCollision_6: class extends self.I3DShapeInstance {},
	TapeCollision_7: class extends self.I3DShapeInstance {},
	ButtonUp: class extends self.ISpriteInstance {},
	ButtonDown: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	DistanceChecker: class extends self.ISpriteInstance {},
	HTMLElement: class extends self.IHTMLElementInstance {}
}