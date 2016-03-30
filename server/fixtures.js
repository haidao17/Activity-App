if (Activitys.find().count() === 0 ) {
	Activitys.insert({
		name: "打羽毛球",
		date: "10月20日下午4:00至 6:00",
		location:"广外羽毛球馆",
		detail:"一共订了两个场地",
		author:"system"
	});
	Activitys.insert({
		name: "新生杯足球赛首轮",
		date: "10月24日 18:00 至 20:00",
		location: "中大假草",
		detail:"7人制足球比赛，提供饮料",
		author:"system"
	});
	Activitys.insert({
		name: "万圣节晚会",
		date: "10月31日20:00至1月1日1:00",
		location: "新天地正门口",
		detail: "需要化妆",
		author: "system"
	});
}