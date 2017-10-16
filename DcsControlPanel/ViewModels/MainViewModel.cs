using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DcsControlPanel.ViewModels
{
    public class MainViewModel: ViewModelBase
    {
        private ViewModelBase _actionWorkspace;

        public MainViewModel()
        {
            ActionWorkspace = new ScheduleCompetitionViewModel();
        }

        public ViewModelBase ActionWorkspace
        {
            get { return _actionWorkspace; }

            set
            {
                if (_actionWorkspace != value)
                {
                    _actionWorkspace = value;
                    OnPropertyChanged(nameof(ActionWorkspace));
                }
            }
        }

        public override string Title => "Dance Competition System";
    }
}
