coATB = {
  Version        : new Version(2018,3,23,9),
  Title          : new Title("Andrew Thomas Brunner","Andrew Thomas Brunners's Personal Profile"),
  Vendor         : new Vendor("Aurawin", "Copyright (&copy;) 2018.  All rights reserved.", [{'REAL-TIME END-USE AWARE INTERACTIVE SEARCH UTILIZING LAYERED APPROACH' : 7720843}, {'SYSTEMS AND APPARATUSES FOR SEAMLESS INTEGRATION OF USER, CONTEXTUAL, AND SOCIALLY AWARE SEARCH UTILIZING LAYERED APPROACH' : 7860852} ]),
  Header         : coAppKit.Dependencies.Create(null,'/atb/coATB.js',coAppKit.PreLoaded),
  Usage          : coAppKit.Units.Create(null,'/atb/coATB.js',coAppKit.PreLoaded),
  Unit           : '/atb/coATB.js',
  imgFace        : '/atb/cp.png',
  debugToConsole : true,
  VDM            : null,

  opCloudMax         : 0.7,
  opCloudMin         : 0.2,

  divCloud           : null,
  cloudPulsate       : true,
  smallImage         : 100,
  largeImage         : 270,
  init           : function(vdm){
    this.App=coAppKit.createApplication(
      this.Unit,
      this.Title,
      this.Version,
      this.Vendor,
      [
        "/core/app/coApp.js",
        "/core/app/coAppUI.js",
        "/core/app/coAppScreens.js",
        "/core/cms/coCMS.js"
      ],
      [
        "/atb/coATB.css",
        "/atb/Views.js",
        "/atb/VMain.js",
        "/atb/VBlog.js",
        "/atb/VPortfolio.js"

      ],
      this.onInitialized
    );
    this.App.onPostBoot=function(App){
      App.Initialized=true;
    };
    this.VDM=vdm;
    this.App.ConsealAfterCreate=false;
    this.Header.App=this.App;
    this.Usage.App=this.App;
    this.App.Unit=this;
    this.App.Splashed=false;
    return this;
  },
  onInitialized:function(App){
    App.Screen=App.Unit.VDM.FrontPage=App.Unit.Create(App.Unit.VDM);
    App.Screen.Show();
    App.Loaded=true;
  },
  Create:function(aVDM){
    var ss=coAppScreens.createScreen(
      aVDM,
      "Screen",
      "System",
      "ATB",
      "ATB",
      "/core/vdm/imgs/icns/lgo.png",
      0.5,
      0.5,
      coAppUI.Frameless,
      "frmApp",
      "bdrApp",
      "flmApp",
      "cltApp"
    );
    ss.Unit=this;
    ss.Position=coApp.Position.Full;
    ss.State=coApp.State.Full;
    ss.iconInApplications=false;
    ss.iconInTaskList=false;
    ss.AllowFullScreen=false;
    ss.SaveGeometry=false;

    coDOM.setText(this.divTopNavBarTitle,"Andrew Thomas Brunner");

    ss.Manifest.Geometry.State.Value=coApp.State.Full;
    ss.Manifest.Geometry.State.Default=coApp.State.Full;

    ss.Container.className="Screen";
    ss.Frame.Torus.Container.style.bottom="0px";
    ss.Frame.Torus.Container.style.top="5px";

    ss.Views = coATB.App.Components.Views.Create(ss);
    ss.Views.Reveal();

    ss.doHide=function(){
      var ss=this;
    };
    ss.doResize=function(){
      var ss=this;
    };


    coDOM.$("TNBIHome").style.display="none";
    coDOM.$("TNBIEnterprise").style.display="none";
    coDOM.$("TNBIPartners").style.display="none";
    coDOM.$("TNBIDevelopers").style.display="none";
    coDOM.$("TNBIDownloads").style.display="none";
    coDOM.$("TopNavBarLogo").style.backgroundImage="url("+coATB.imgFace+")";
    ss.doShow=function(){
      var ss=this;
      coDOM.setStyle(coATB.divTopNav,coDOM.BoxShadow,coTheme.CSS.BoxShadow.None);
      ss.Views.Reveal();
      coATB.cloudPulsate=false;
      coVDM.VDM.Torus.Stop();
      ss.Container.style.opacity=1;
    };

    return ss;
  },
  doPageLoad:function(){
    this.showOnCreate=true;
    var html=document.getElementsByTagName('html')[0];
    html.style.overflow="auto";
    window.scrollTo(0,1);
    document.body.style.margin="0";
    document.body.style.padding="0";
    document.body.style.overflow="auto";
    this.divWrapper=coDOM.$("cmpWrapper");
    this.divTopNav=coDOM.$("TopNavBar");
    this.divCloud=coDOM.$("Cloud");
    this.divTopNavBarTitle=coDOM.$("TopNavBarTitle");
    this.divTNBIHome=coDOM.$("TNBIHome");
    this.divTNBIEnterprise=coDOM.$("TNBIEnterprise");
    this.divTNBIPartners=coDOM.$("TNBIPartners");
    this.divTNBIDevelopers=coDOM.$("TNBIDevelopers");
    this.divTNBIDownloads=coDOM.$("TNBIDownloads");

    this.evtCloud=coEvents.Add(
      this.divCloud,
      coDOM.TransitionEnd,
      this.cloudTransitionEnd,
      coEvents.NoCapture,
      coEvents.Active
    );
    this.divCloud.style.opacity=.27;
  },
  cloudTransitionEnd:function(e){
    if (coATB.cloudPulsate==true) {
      var Opacity=coATB.divCloud.style.opacity;
      Opacity=(Opacity==coATB.opCloudMax) ? coATB.opCloudMin : coATB.opCloudMax;
      coATB.divCloud.style.opacity=Opacity;
    } else {
      coATB.divCloud.style.opacity=0;
    };
  }
};
coATB.init(coVDM.VDM);

