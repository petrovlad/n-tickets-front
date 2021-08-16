import React, {useContext} from "react";
import TicketsContext from "../context/tickets-context";
import {makeStyles} from "@material-ui/core/styles";
import {ButtonBase, Container, Grid, Paper, Typography} from "@material-ui/core";
import {LinkIcon, PencilIcon, XCircleIcon} from "@primer/octicons-react"

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

  return (ticket ?
      <div style={{backgroundColor: "gray"}}>
        <p>{ticket.title}-{ticket.readingsCount}-{ticket.uniqueHash}</p>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2} zeroMinWidth>
                  <Grid item xs zeroMinWidth>
                    <Typography gutterBottom variant="h4" noWrap>
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
                    <Typography variant="h1" color="textSecondary" noWrap>
                      {ticket.readingsCount}
                    </Typography>
                  </div>
                  <div style={{display: "flex", justifyContent: "center"}}>
                    <Typography variant="h5" color="textSecondary" noWrap >
                      {ticket.readingsCount > 1 ? "times" : "time"}
                    </Typography>
                  </div>

                </Grid>
                <Grid item zeroMinWidth>
                  <div className="btn-group-vertical">
                    <button type="button" className="btn btn-outline-secondary close"
                            data-toggle="tooltip" data-placement="right" title="Edit ticket">
                      <PencilIcon size={16} />
                    </button>
                    <button type="button" className="btn btn-outline-danger"
                            data-toggle="tooltip" data-placement="right" title="Delete ticket">
                      <XCircleIcon size={16} />
                    </button>
                    <button type="button" className="btn btn-outline-secondary"
                            data-toggle="tooltip" data-placement="right" title="Copy link">
                      <LinkIcon size={16} />
                    </button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
{/*        <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group me-2" role="group">
            <button
              type="button"
              className="btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
              onClick={() => setSelected(ticket)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleDeleteModal"
              onClick={() => setSelected(ticket)}
            >
              Delete
            </button>

          </div>
        </div>*/}
      </div>
      : <p>Ticket doesn't exist</p>
  )
}

