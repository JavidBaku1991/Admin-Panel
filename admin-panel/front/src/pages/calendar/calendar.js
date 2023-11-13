import { useState ,useEffect} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import esLocale from '@fullcalendar/core/locales/az';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../components/theme.js";
import AppBarNav from "../../components/AppBar.js";
import DrawerComponent from "../../components/DrawerComponent.js";


import i18next from 'i18next'
import {useTranslation, initReactI18next } from 'react-i18next';
import  LanguageDetector  from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'

i18next
 .use(initReactI18next)
 .use(LanguageDetector )
 .use(HttpApi)
 .init({
  fallback:"en",
  detection:{
    order:['cookie','htmlTag','localStorage','path','subdomain'],
    cache:['cookie'],
  }, backend:{
    loadPath:'./locales/{{lng}}/translation.json',
  },
  react:{
    useSuspense:false
  },
  interpolation: {
    escapeValue: false, // React already does escaping
  }
 });

const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(date);
};


const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
      i18n.changeLanguage('en'); // Set the desired language here
    }, [i18n]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

  
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (<Box>
    <AppBarNav />
  <DrawerComponent/><Box m="20px">

<Box display="flex" justifyContent="space-between">
  
  {/* CALENDAR SIDEBAR */}
  <Box
    flex="1 1 20%"
    backgroundColor={colors.primary[400]}
    p="15px"
    borderRadius="4px"
  >
    <Typography variant="h3" sx={{border:'2px solid', textAlign:'center', backgroundColor:colors.greenAccent[600]}} >{t('events')}</Typography>
    <List>
      {currentEvents.map((event) => (
        <ListItem
          key={event.id}
          sx={{
            backgroundColor: colors.greenAccent[800],
            margin: "10px 0",
            borderRadius: "2px",
          }}
        >
          <ListItemText
            primary={event.title}
            secondary={
              <Typography>
                {formatDate(event.start,
                {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  </Box>

  {/* CALENDAR */}
  <Box flex="1 1 100%" ml="15px">
    <FullCalendar
     locale={i18n.language}
    locales={[esLocale]}
      height="75vh"
      plugins={[
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        listPlugin,
      ]}
      headerToolbar={{
        left: "prev,next today",
        center:'title',
        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
      }}
      initialView="dayGridMonth"
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      select={handleDateClick}
      eventClick={handleEventClick}
      eventsSet={(events) => setCurrentEvents(events)}
      
    />
  </Box>
</Box>
</Box>
  </Box>
    
  );
};

export default Calendar;