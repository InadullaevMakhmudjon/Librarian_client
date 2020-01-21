import React from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogContent, Button as MBtutton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import {
  Text,
  TextRow,
  DetailsContainer,
  DContentContainer,
} from './controllers';

const styles = {
  submit: {
    marginTop: '50px',
    background: '#03BCF1',
    color: 'white',
    width: '180px',
    borderRadius: '10px',
    height: '80px',
  },
};

const HomeDialog = ({
  open, close, quantity, name,
}) => (
  <Dialog
    open={!!open}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogContent>
      <DialogContent>
        <DContentContainer>
          <Text title>
              Process has successfully completed
          </Text>
          <DetailsContainer>
            <TextRow>
              <Text bold>Borrower name: </Text>
              <Text>{name}</Text>
            </TextRow>
            <TextRow>
              <Text bold>Book quantity: </Text>
              <Text>{quantity}</Text>
            </TextRow>
            <TextRow>
              <Text bold>Taken date: </Text>
              <Text>17/01/2020</Text>
            </TextRow>
          </DetailsContainer>
          <MBtutton
            onClick={close}
            variant="contained"
            style={styles.submit}
          >
            <HomeIcon fontSize="large" />
          </MBtutton>
        </DContentContainer>
      </DialogContent>
    </DialogContent>
  </Dialog>
);

HomeDialog.propTypes = {
  open: PropTypes.number,
  close: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

HomeDialog.defaultProps = {
  open: 0,
};

export default HomeDialog;
