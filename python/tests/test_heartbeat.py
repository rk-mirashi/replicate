import time
import json
import os
import datetime
import dateutil.parser
from dateutil.tz import tzutc
from waiting import wait

from replicate.heartbeat import Heartbeat


def test_heartbeat_running(tmpdir):
    tmpdir = str(tmpdir)
    path = "foo/heartbeat.json"
    heartbeat = Heartbeat(
        "experiment-id-foo",
        "file://" + tmpdir,
        path,
        refresh_interval=datetime.timedelta(seconds=1),
    )
    assert not heartbeat.is_alive()

    heartbeat.start()
    assert heartbeat.is_alive()

    heartbeat.kill()
    time.sleep(0.1)
    assert not heartbeat.is_alive()
    heartbeat.ensure_running()
    assert heartbeat.is_alive()

    heartbeat.kill()


def test_heartbeat_write(tmpdir):
    tmpdir = str(tmpdir)
    t1 = datetime.datetime.utcnow().replace(tzinfo=tzutc())

    path = "foo/heartbeat.json"
    heartbeat = Heartbeat(
        "experiment-id-foo",
        "file://" + tmpdir,
        path,
        refresh_interval=datetime.timedelta(seconds=0.1),
    )
    heartbeat.start()

    heartbeat_path = os.path.join(tmpdir, "foo", "heartbeat.json")

    wait(lambda: os.path.exists(heartbeat_path), timeout_seconds=1, sleep_seconds=0.01)

    with open(heartbeat_path) as f:
        obj = json.loads(f.read())
    last_heartbeat = dateutil.parser.parse(obj["last_heartbeat"])

    t2 = datetime.datetime.utcnow().replace(tzinfo=tzutc())

    assert t1 < last_heartbeat < t2

    time.sleep(0.2)

    with open(heartbeat_path) as f:
        obj = json.loads(f.read())
    new_last_heartbeat = dateutil.parser.parse(obj["last_heartbeat"])

    assert t1 < last_heartbeat < t2 < new_last_heartbeat

    heartbeat.kill()
