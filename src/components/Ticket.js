import React, {useContext} from "react";
import TicketsContext from "../context/tickets-context";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper, Typography} from "@material-ui/core";
import {LinkIcon, PencilIcon, XCircleIcon} from "@primer/octicons-react"
import {RedTypography} from "./util/RedTypography";
import {YellowTypography} from "./util/YellowTypography";

export const Ticket = (props) => {
  const ticket = props.value;

  const ticketContext = useContext(TicketsContext);

  const setSelected = (ticket) => {
    console.log(ticket)
    ticketContext.setSelectedTicket(ticket);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 400,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

  const classes = useStyles();

  const SelectedTypography = ticket.readingsCount <= 5 ? RedTypography :
    ticket.readingsCount <= 10 ? YellowTypography : Typography;

  return (ticket ?
        <div className={classes.root} >
          <Paper className={classes.paper} style={{boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)"}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs={7} container direction="column" spacing={2} zeroMinWidth>
                  <Grid item xs zeroMinWidth>
                    <Typography gutterBottom variant="h5" noWrap>
                      {ticket.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom noWrap>
                      {ticket.content}
                    </Typography>
                  </Grid>
                  <Grid item zeroMinWidth>
                    <Typography variant="body2" color="textSecondary" noWrap>
                      Some date
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs zeroMinWidth>
                  <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
                    <SelectedTypography variant="h2" color="textSecondary" noWrap>
                      {ticket.readingsCount}
                    </SelectedTypography>
                  </div>
                  <div style={{display: "flex", justifyContent: "center"}}>
                      <SelectedTypography variant="h5" color="textSecondary" noWrap>
                        {ticket.readingsCount > 1 ? "times" : "time"}
                      </SelectedTypography>
                  </div>

                </Grid>
                <Grid item zeroMinWidth>
                  <div className="btn-group-vertical">
                    <button type="button"
                            className="btn btn-outline-secondary close"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                            onClick={() => setSelected(ticket)}
                            data-toggle="tooltip" data-placement="right" title="Edit ticket">
                      <PencilIcon size={16} />
                    </button>

                    <button type="button"
                            className="btn btn-outline-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleDeleteModal"
                            onClick={() => setSelected(ticket)}
                            data-toggle="tooltip" data-placement="right" title="Delete ticket">
                      <XCircleIcon size={16} />
                    </button>

                    <button type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => {navigator.clipboard.writeText(`http://localhost:1337/ticket-${ticket.uniqueHash}`)}}
                            data-toggle="tooltip" data-placement="right" title="Copy link">
                      <LinkIcon size={16} />
                    </button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
      </div>
      : <p>Ticket doesn't exist</p>
  )
}

