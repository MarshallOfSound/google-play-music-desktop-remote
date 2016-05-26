/**
 * @providesModule ControlBar
 */
import React, { StyleSheet, Text, View } from 'react-native'
import { getTheme } from 'react-native-material-kit'
import CircleButton from 'CircleButton'
import PlayPauseButton from 'PlayPauseButton'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import colors from 'GooglePlayMusicDesktopRemote/src/config/colors'

const theme = getTheme()

export default class ControlBar extends React.Component {

  static propTypes = {
    isPlaying: React.PropTypes.bool,
    isStopped: React.PropTypes.bool,
    repeatMode: React.PropTypes.string,
    shuffleMode: React.PropTypes.string,
    onPlayPress: React.PropTypes.func,
    onPrevPress: React.PropTypes.func,
    onNextPress: React.PropTypes.func,
    onRepeatPress: React.PropTypes.func,
    onShufflePress: React.PropTypes.func
  }

  static defaultProps = {
    isPlaying: false,
    isStopped: true
  }

  render = () => {
    const { onPlayPress, onPrevPress, onNextPress, onRepeatPress, onShufflePress, isPlaying, isStopped, shuffleMode, repeatMode } = this.props

    let repeatColor = colors.GREY_DARK;
    let shuffleColor = colors.GREY_DARK;
    if (repeatMode !== 'NO_REPEAT') {
      repeatColor = colors.ORANGE;
    }
    if (shuffleMode !== 'NO_SHUFFLE') {
      shuffleColor = colors.ORANGE;
    }
    const repeatIcon = <IconMaterial name={repeatMode === 'SINGLE_REPEAT' ? 'repeat-one' : 'repeat'} size={26} color={repeatColor} />
    const prevIcon = <IconMaterial name='skip-previous' size={26} color={colors.GREY_DARK} />
    const nextIcon = <IconMaterial name='skip-next' size={26} color={colors.GREY_DARK} />
    const shuffleIcon = <IconMaterial name='shuffle' size={26} color={shuffleColor} />

    return (
      <View style={styles.container}>
        <CircleButton onPress={onRepeatPress} size={42}>
          {repeatIcon}
        </CircleButton>
        <CircleButton onPress={onPrevPress} size={42}>
          {prevIcon}
        </CircleButton>
        <CircleButton onPress={onPlayPress} size={78}>
          <PlayPauseButton isPlaying={isPlaying} isStopped={isStopped} />
        </CircleButton>
        <CircleButton onPress={onNextPress} size={42}>
          {nextIcon}
        </CircleButton>
        <CircleButton onPress={onShufflePress} size={42}>
          {shuffleIcon}
        </CircleButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 100,
    elevation: 4,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
