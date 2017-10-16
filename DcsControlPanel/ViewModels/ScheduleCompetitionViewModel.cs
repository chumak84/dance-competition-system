using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DcsControlPanel.ViewModels
{
    public class ScheduleCompetitionViewModel: ViewModelBase
    {
        private string _name;
        private DateTime _date;

        public ScheduleCompetitionViewModel()
        {
            ScheduleCommand = new Command(Schedule);
        }

        public string Name
        {
            get { return _name; }

            set
            {
                if (_name != value)
                {
                    _name = value;
                    OnPropertyChanged(nameof(Name));
                }
            }
        }

        public DateTime Date
        {
            get { return _date; }

            set
            {
                if (_date != value)
                {
                    _date = value;
                    OnPropertyChanged(nameof(Date));
                }
            }
        }

        public void Schedule()
        {
        }

        public Command ScheduleCommand { get; }

        public override string Title => "Schedule Event";
    }
}
