const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Keyboard,
		C3.Behaviors.MoveTo,
		C3.Behaviors.Tween,
		C3.Behaviors.Sin,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.LocalStorage,
		C3.Plugins.TextBox,
		C3.Plugins.AJAX,
		C3.Plugins.HTMLElement,
		C3.Plugins.Arr,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Behaviors.Bullet,
		C3.Plugins.Date,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Flash,
		C3.Plugins.Browser,
		C3.Plugins.Particles,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Text.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Cnds.IsOverlappingOffset,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Particles.Acts.SetPosToObject,
		C3.Plugins.Particles.Acts.SetPos,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Behaviors.MoveTo.Acts.SetSpeed,
		C3.Behaviors.MoveTo.Acts.SetAcceleration,
		C3.Behaviors.MoveTo.Acts.SetDeceleration,
		C3.Plugins.Sprite.Acts.SetEffectEnabled,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.MoveTo.Acts.SetEnabled,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Spritefont2.Acts.SetScale,
		C3.Plugins.Spritefont2.Acts.SetDefaultColor,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Audio.Acts.Stop,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Behaviors.Sin.Acts.SetPhase,
		C3.Behaviors.Bullet.Acts.Bounce,
		C3.Behaviors.Bullet.Exps.AngleOfMotion,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.Audio.Acts.SetMasterVolume,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Touch.Exps.SpeedAt,
		C3.Plugins.System.Cnds.IsBetweenAngles,
		C3.Plugins.Touch.Exps.AngleAt,
		C3.Behaviors.MoveTo.Exps.Speed,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.ScriptsInEvents.Registration_Event1,
		C3.Plugins.TextBox.Acts.SetMaxLength,
		C3.Plugins.TextBox.Acts.SetElemAttribute,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.LocalStorage.Cnds.OnAllGetsComplete,
		C3.Plugins.AJAX.Acts.Request,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.System.Exps.int,
		C3.Plugins.AJAX.Exps.LastData,
		C3.ScriptsInEvents.Registration_Event20,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.TextBox.Cnds.CompareText,
		C3.Plugins.System.Exps.len,
		C3.Plugins.System.Cnds.RegexTest,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.System.Exps.left,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.TextBox.Acts.SetPos,
		C3.ScriptsInEvents.Registration_Event25,
		C3.Plugins.AJAX.Acts.Post,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.TextBox.Acts.SetVisible,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.HTMLElement.Acts.InsertContent,
		C3.Plugins.System.Acts.LoadLayoutTexturesByName,
		C3.Plugins.Arr.Cnds.ArrForEach,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.Arr.Exps.CurX,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Exps.find,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.HTMLElement.Acts.SetScrollPosition,
		C3.Plugins.System.Exps.viewportheight,
		C3.Plugins.System.Cnds.OnImageLoadingComplete,
		C3.Plugins.Browser.Acts.GoToURLWindow,
		C3.Plugins.Text.Acts.SetFontSize,
		C3.Plugins.Spritefont2.Acts.SetY,
		C3.Plugins.Text.Acts.SetY,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.Spritefont2.Acts.SetVisible,
		C3.Plugins.System.Cnds.CompareBetween,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.System.Cnds.OnLoadFinished,
		C3.Plugins.HTMLElement.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{bg: 0},
	{Keyboard: 0},
	{MoveTo: 0},
	{Tween: 0},
	{Sine: 0},
	{mouthObj: 0},
	{Refected: 0},
	{isMagnetised: 0},
	{ballObj: 0},
	{clockObj: 0},
	{snowObj: 0},
	{coinObj: 0},
	{multiplierType: 0},
	{multiplierObj: 0},
	{magnetObj: 0},
	{magnetCircle: 0},
	{playButton: 0},
	{Mouse: 0},
	{Touch: 0},
	{nextButton: 0},
	{LocalStorage: 0},
	{nameInput: 0},
	{emailInput: 0},
	{phoneInput: 0},
	{nicknameInput: 0},
	{AJAX: 0},
	{HTMLElement: 0},
	{Array: 0},
	{tetButton: 0},
	{Audio: 0},
	{eatParticles: 0},
	{chipsBag: 0},
	{countDownAnimation: 0},
	{bonusParticles: 0},
	{muteButton: 0},
	{UIicons: 0},
	{multiplierTextUI: 0},
	{titleImage: 0},
	{titleScreenGuy_1: 0},
	{baseWidth: 0},
	{baseHeight: 0},
	{titleScreenGuy_2: 0},
	{labsRezultats_1: 0},
	{moveAngle: 0},
	{Sine2: 0},
	{Sine3: 0},
	{Bullet: 0},
	{titleScreenBall: 0},
	{pointsBGUI: 0},
	{pointsText: 0},
	{titleMouth: 0},
	{Sprite: 0},
	{TCcheck_1: 0},
	{termsModalBG: 0},
	{closeTermsModalButton: 0},
	{termsModalOverlay: 0},
	{top30Header: 0},
	{playAgainButton: 0},
	{hiScoreSeparator: 0},
	{bonusDisplayUI: 0},
	{objectCleaner: 0},
	{endAnimation: 0},
	{kustiesText: 0},
	{adazhuTETlogo: 0},
	{loadingButton: 0},
	{cheeseBallTransition: 0},
	{labsRezultats_2: 0},
	{bonusGlow: 0},
	{Date: 0},
	{dateText: 0},
	{scoreUIsprite: 0},
	{Flash: 0},
	{timeUIsprite: 0},
	{endScreenScoreSprite: 0},
	{adazhuTETlogo2: 0},
	{bonusNotification: 0},
	{bonusNotificationBG: 0},
	{termsText_1: 0},
	{termsText_2: 0},
	{TCcheck_2: 0},
	{Browser: 0},
	{hiScoreBG2: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{termsAccept: 0},
	{ageAccept: 0},
	{dataAccept: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Text2: 0},
	{Sprite10: 0},
	{HTMLElement2: 0},
	{ieladeButton: 0},
	{Sprite13: 0},
	{UIicons2: 0},
	{bgGlowIce: 0},
	{bgGlowBonus: 0},
	{bgGlowBonus2: 0},
	{bgGlowBonusCoin: 0},
	{bgGlowBonus3: 0},
	{coinParticles: 0},
	{magnetParticles: 0},
	{clockParticles: 0},
	{multiParticles: 0},
	{HTMLElement3: 0},
	{Sprite11: 0},
	{HTMLElement4: 0},
	{Sprite14: 0},
	{bgChecker: 0},
	{FreezeTimer: 0},
	{OBJECTS: 0},
	{gameTime: 0},
	{totalPlayTime: 0},
	{sessionScore: 0},
	{playerPosition: 0},
	{userPrizeSelection: 0},
	{cachedUsername: 0},
	{cachedEmail: 0},
	{cachedPhone: 0},
	{cheeseBallSound: 0},
	{onMute: 0},
	{termsAccepted: 0},
	{previuslyWon: 0},
	{freezeActive: 0},
	{multiplierActive: 0},
	{magnetActive: 0},
	{SCORE_DOMAIN: 0},
	{hashParameter: 0},
	{email: 0},
	{playerHiscorePosition: 0},
	{playerRank: 0}
];

self.InstanceType = {
	bg: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	mouthObj: class extends self.ISpriteInstance {},
	ballObj: class extends self.ISpriteInstance {},
	clockObj: class extends self.ISpriteInstance {},
	snowObj: class extends self.ISpriteInstance {},
	coinObj: class extends self.ISpriteInstance {},
	multiplierObj: class extends self.ISpriteInstance {},
	magnetObj: class extends self.ISpriteInstance {},
	magnetCircle: class extends self.ISpriteInstance {},
	playButton: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	nextButton: class extends self.ISpriteInstance {},
	LocalStorage: class extends self.IInstance {},
	nameInput: class extends self.ITextInputInstance {},
	emailInput: class extends self.ITextInputInstance {},
	phoneInput: class extends self.ITextInputInstance {},
	nicknameInput: class extends self.ITextInputInstance {},
	AJAX: class extends self.IInstance {},
	HTMLElement: class extends self.IHTMLElementInstance {},
	Array: class extends self.IArrayInstance {},
	tetButton: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	eatParticles: class extends self.ISpriteInstance {},
	chipsBag: class extends self.ISpriteInstance {},
	countDownAnimation: class extends self.ISpriteInstance {},
	bonusParticles: class extends self.ISpriteInstance {},
	muteButton: class extends self.ISpriteInstance {},
	UIicons: class extends self.ISpriteInstance {},
	multiplierTextUI: class extends self.ITextInstance {},
	titleImage: class extends self.ISpriteInstance {},
	titleScreenGuy_1: class extends self.ISpriteInstance {},
	titleScreenGuy_2: class extends self.ISpriteInstance {},
	labsRezultats_1: class extends self.ISpriteInstance {},
	titleScreenBall: class extends self.ISpriteInstance {},
	pointsBGUI: class extends self.ISpriteInstance {},
	pointsText: class extends self.ITextInstance {},
	titleMouth: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	TCcheck_1: class extends self.ISpriteInstance {},
	termsModalBG: class extends self.ISpriteInstance {},
	closeTermsModalButton: class extends self.ISpriteInstance {},
	termsModalOverlay: class extends self.ISpriteInstance {},
	top30Header: class extends self.ISpriteInstance {},
	playAgainButton: class extends self.ISpriteInstance {},
	hiScoreSeparator: class extends self.ISpriteInstance {},
	bonusDisplayUI: class extends self.ISpriteInstance {},
	objectCleaner: class extends self.ISpriteInstance {},
	endAnimation: class extends self.ISpriteInstance {},
	kustiesText: class extends self.ISpriteInstance {},
	adazhuTETlogo: class extends self.ISpriteInstance {},
	loadingButton: class extends self.ISpriteInstance {},
	cheeseBallTransition: class extends self.ISpriteInstance {},
	labsRezultats_2: class extends self.ISpriteInstance {},
	bonusGlow: class extends self.ISpriteInstance {},
	Date: class extends self.IInstance {},
	dateText: class extends self.ITextInstance {},
	scoreUIsprite: class extends self.ISpriteFontInstance {},
	timeUIsprite: class extends self.ISpriteFontInstance {},
	endScreenScoreSprite: class extends self.ISpriteFontInstance {},
	adazhuTETlogo2: class extends self.ISpriteInstance {},
	bonusNotification: class extends self.ISpriteInstance {},
	bonusNotificationBG: class extends self.ISpriteInstance {},
	termsText_1: class extends self.ISpriteInstance {},
	termsText_2: class extends self.ISpriteInstance {},
	TCcheck_2: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	hiScoreBG2: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	termsAccept: class extends self.ISpriteInstance {},
	ageAccept: class extends self.ISpriteInstance {},
	dataAccept: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	HTMLElement2: class extends self.IHTMLElementInstance {},
	ieladeButton: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	UIicons2: class extends self.ISpriteInstance {},
	bgGlowIce: class extends self.ISpriteInstance {},
	bgGlowBonus: class extends self.ISpriteInstance {},
	bgGlowBonus2: class extends self.ISpriteInstance {},
	bgGlowBonusCoin: class extends self.ISpriteInstance {},
	bgGlowBonus3: class extends self.ISpriteInstance {},
	coinParticles: class extends self.IParticlesInstance {},
	magnetParticles: class extends self.IParticlesInstance {},
	clockParticles: class extends self.IParticlesInstance {},
	multiParticles: class extends self.IParticlesInstance {},
	HTMLElement3: class extends self.IHTMLElementInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	HTMLElement4: class extends self.IHTMLElementInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	bgChecker: class extends self.ISpriteInstance {},
	FreezeTimer: class extends self.ITextInstance {},
	OBJECTS: class extends self.ISpriteInstance {}
}