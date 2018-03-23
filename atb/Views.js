coATB.App.Components.Views = {
  Version        : new Version(2018,3,7,4),
  Title          : new Title("ATB Views","Views"),
  Vendor         : new Vendor("Aurawin", "Copyright (&copy;) 2018.  All rights reserved.", [{'REAL-TIME END-USE AWARE INTERACTIVE SEARCH UTILIZING LAYERED APPROACH' : 7720843}, {'SYSTEMS AND APPARATUSES FOR SEAMLESS INTEGRATION OF USER, CONTEXTUAL, AND SOCIALLY AWARE SEARCH UTILIZING LAYERED APPROACH' : 7860852} ]),
  Header         : coAppKit.Dependencies.Create(coATB.App,'/atb/Views.js',coAppKit.PreLoaded),
  debugToConsole : true,
  lastSize       : null,
  lastOrientation : null,
  Create : function(Screen){
    var vs=Screen.Slides.createSlide(
      "Views",
      Screen.Class+"Views",
      Screen,
      Screen.Frame,
      Screen.Frame.Client,
      coAppUI.Alignment.Client
    );
    vs.Unit=this;
    vs.Main=coATB.App.Components.MainView.Create(vs);

    vs.Visible=true;
    vs.clearContainerClass();
    vs.onResize=function(){
      var vs = this;
      var api = vs.Unit;
      var o =  coVDM.Orientation;
      switch (o.Current){
             case o.Landscape:
                  if (vs.Unit.lastSize!=coVDM.Display.Small) {
                    if (coVDM.Display.Small==true) {
                       vs.Unit.lastSize=true;

                    } else {
                      vs.Unit.lastSize=false;
                    };
                  };
                  break;
             case o.Portrait:
                  if (vs.Unit.lastSize!=coVDM.Display.Small) {
                    if (coVDM.Display.Small==true) {
                       vs.Unit.lastSize=true;
                    } else {
                      vs.Unit.lastSize=false;
                    };
                  };
                  break;

      };
    };

    return vs;
  }
};

