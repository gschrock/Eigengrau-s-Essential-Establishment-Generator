/* global setup tippy jQuery settings */
setup.profileTooltip = function (id, char) {
  jQuery(function () {
    var span = document.getElementById(id)
    if (span) {
      span.title = 'A ' + char.weight + ' ' + char.malefemale + ' ' + char.raceAdjective + ' ' + char.dndClass + ' with ' + char.physicalTrait + ' called ' + char.name
      tippy('#' + span.id)
    }
  })
}

setup.itemTooltip = function (id, item) {
  jQuery(function () {
    var span = document.getElementById(id)
    if (span) {
      span.title = item.description
      tippy('#' + span.id)
    }
  })
}

setup.profileAgeTooltip = function (id, char) {
  jQuery(function () {
    var span = document.getElementById(id)
    if (span) {
      span.title = char.ageYears + ' years, to be exact.'
      tippy('#' + span.id)
    }
  })
}

setup.profileHeightTooltip = function (id, char) {
  jQuery(function () {
    var span = document.getElementById(id)
    if (span) {
      if (settings.showMetric === true) {
        span.title = (char.heightRoll * 0.0254).toFixed(2) + 'm tall'
        tippy('#' + span.id)
      } else {
        var feet = Math.trunc(char.heightRoll / 12)
        var inches = Math.round(char.heightRoll - (Math.trunc(feet * 12)))
        if (inches === 0) {
          span.title = feet + 'ft. '
        } else {
          span.title = feet + 'ft. ' + inches + '"'
        }
        tippy('#' + span.id)
      }
    }
  })
}

setup.profileWeightTooltip = function (id, char) {
  jQuery(function () {
    var span = document.getElementById(id)
    if (span) {
      if (settings.showMetric === true) {
        span.title = (char.weightRoll / 2.2046).toFixed(1) + 'kg (with a BMI of ' + char.bmi + ')'
        tippy('#' + span.id)
      } else {
        span.title = char.weightRoll + 'lbs. (with a BMI of ' + char.bmi + ')'
      }

      tippy('#' + span.id)
    }
  }
  )
}

setup.buildingTooltip = function (id, building) {
  jQuery(function () {
    var span = document.getElementById(id)
    if (span) {
      span.title = 'A ' + (building.size || building._size) + ' ' + building.wordNoun + " that's " + (building.cleanliness || building._cleanliness) + ', and is known for ' + building.notableFeature + '.'
      tippy('#' + span.id)
    }
  })
}
