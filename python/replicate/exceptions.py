from . import constants


class DoesNotExistError(Exception):
    pass


class UnknownRepositoryScheme(Exception):
    def __init__(self, scheme):
        if scheme == "":
            message = "Missing repository scheme"
        else:
            message = "Unknown repository scheme: {}".format(scheme)
        super().__init__(
            message
            + """.

Make sure your repository URL starts with either 'file://', 's3://', or 'gs://'.
See the docuemntation for more details: {}""".format(
                constants.YAML_REFERENCE_DOCS_URL
            )
        )


class ConfigNotFoundError(Exception):
    def __init__(self, message):
        message += """

You must either create a replicate.yaml configuration file, or explicitly pass the arguments 'repository' and 'directory' to replicate.Project().

For more information, see {}""".format(
            constants.YAML_REFERENCE_DOCS_URL
        )
        super().__init__(message)
